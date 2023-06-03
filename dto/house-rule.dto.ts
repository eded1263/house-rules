export interface HouseRule {
  id?: number
  name: string
  active: boolean
  order: number
}

export interface CreateHouseRuleDto {
  name: string
  active: boolean
}
