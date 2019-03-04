export function categoriesFormattedForDropdown(categories) {
  return categories.map(category => {
    return {
      value: category.name,
      text: category.name
    };
  });
}
