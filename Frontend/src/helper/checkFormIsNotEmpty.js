

export const checkFormIsNotEmpty = (FormData) => {
    const { heading, description, imageUrl, category } = FormData;

    if (
      heading !== "" &&
      description !== "" &&
      imageUrl !== "" &&
      category !== ""
    ) {
      return true;
    }

    return false;
  };