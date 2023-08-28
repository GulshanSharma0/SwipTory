const Story = require("../../Models/stories");
const User = require("../../Models/users");


const addStories = async (req, res) => {
  try {
    const storiesToUpdate = req.body;
    const { _id } = req.user;
    const user = await User.findOne({ _id: _id });
    const{stories} = user;
    if(stories.length === 6){
           return res.status(400).json({message:'You already have 6 stories'});                   
    }
    const updatedStories = await Promise.all(
      storiesToUpdate.map(async (updatedStory) => {
        if (updatedStory._id) {
          const existingStory = await Story.findOne({ _id: updatedStory._id });
          if (existingStory) {
            Object.assign(existingStory, updatedStory);
            await existingStory.save();
            return existingStory;
          }
        } else {
          const newStory = new Story(updatedStory);
          await newStory.save();
          return newStory;
        }
      })
    );


    if (user) {
      const updatedStoryIds = updatedStories.map((story) => story._id);
      const notIntheUserStories = updatedStoryIds.filter((storyId)=>{
          if(user.stories.includes(storyId)){
            return false;
          }
          return true;
      })
      user.stories = [...user.stories,...notIntheUserStories];
      await user.save();
    }
    res.status(200).json({message:'stories created successfully!'});
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const editStories = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStory = await Story.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "story updated" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const likeStories = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStory = await Story.findById(id);
    updatedStory.likeCount += 1;
    await updatedStory.save();
    res.status(200).json({ message: "you have liked the story" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const addBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
    const user = await User.findById(_id);
    const isBookmarked = user.bookmark.includes(id);
    if (isBookmarked) {
      return res.status(400).json({ error: "Story already bookmarked" });
    }
    user.bookmark.push(id);
    await user.save();
    return res.status(200).json({ message: "Story bookmarked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const fetchStoriesOfUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id).populate("stories").exec();
    const { stories } = user;
    res.status(200).json({
      status: "success",
      length: stories.length,
      data: stories,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

const fetchAllStories = async (req, res) => {
  const { category } = req.query;

  const aggregationPipeline = [
    {
      $match: category !== "all" ? { category: category } : {},
    },
    {
      $group: {
        _id: "$category",
        data: { $push: "$$ROOT" },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        data: {
          $map: {
            input: "$data",
            as: "story",
            in: {
              _id: "$$story._id",
              heading: "$$story.heading",
              description: "$$story.description",
              imageUrl: "$$story.imageUrl",
              category: "$$story.category",
            },
          },
        },
      },
    },
  ];

  try {
    const categoryStories = await Story.aggregate(aggregationPipeline).exec();
    res.status(200).json(categoryStories);
  } catch (error) {
    res.status(500).json({ error: "Error fetching and categorizing stories" });
  }
};

const fetchBookmarkedStories = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id).populate("bookmark").exec();
    const { bookmark } = user;
    res.status(200).json({
      status: "success",
      length: bookmark.length,
      data: {
        bookmark,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

const filterStories = async (req, res) => {
  try {
    const query = req.query;
    const Stories = await Story.find(query);

    res.status(200).json({
      status: "success",
      length: Stories.length,
      data: {
        Stories,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

module.exports = {
  addStories,
  editStories,
  likeStories,
  filterStories,
  addBookmark,
  fetchAllStories,
  fetchBookmarkedStories,
  fetchStoriesOfUser,
};
