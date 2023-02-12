const sortString = <T>(
  data: Array<T>,
  property: string,
  order?: 'ASC' | 'DESC',
): Array<T> => {
  const orderBy = property;
  data = data.sort((a: any, b: any) => {
    if (order && order === 'DESC') {
      return a[orderBy].toLowerCase() < b[orderBy].toLowerCase() ? 1 : -1;
    }

    return a[orderBy].toLowerCase() > b[orderBy].toLowerCase() ? 1 : -1;
  });

  return data;
};
const sortDate = <T>(
  data: Array<T>,
  property: string,
  order?: 'ASC' | 'DESC',
): Array<T> => {
  const orderBy = property;
  data = data.sort((a: any, b: any) => {
    if (order && order === 'DESC') {
      return new Date(a[orderBy]) < new Date(b[orderBy]) ? 1 : -1;
    }

    return new Date(a[orderBy]) > new Date(b[orderBy]) ? 1 : -1;
  });

  return data;
};

export const sort = {string: sortString, date: sortDate};
