export const productSearch = (search: string) => {
  if (!search) return {};

  return {
    OR: [
      {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: search,
          mode: "insensitive",
        },
      },
    ],
  };
};
