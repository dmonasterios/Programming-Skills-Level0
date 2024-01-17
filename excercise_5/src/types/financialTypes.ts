export type financialStructure = {
  income: number,
  expensives:{
    medical : number,
    household: number,
    leisure: number,
    savings: number,
    education: number
  },
  currency: string
}

export type expenseListItem = {
  id: string,
  title: string,
  description?: string,
  type:'medical'|'household'|'leisure'|'savings'|'education',
  amount: number,
  date: Date
}