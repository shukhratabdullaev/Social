
export const updateObjectInArray = (items: any, itemId: number, objPropName: string, newObjectProps: Object) => {

  return items.map((u: { [x: string]: number }) => {
    if (u[objPropName] === itemId) {
      return {
        ...u, ...newObjectProps
      }
    }
    return u
  })
}