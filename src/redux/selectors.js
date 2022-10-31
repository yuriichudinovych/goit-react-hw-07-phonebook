export const getContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilteredContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }

  const normalizedFilter = filter.toLowerCase();
  const FilteredContacts = items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();

    return normalizedName.includes(normalizedFilter);
  });
  return FilteredContacts;
};
