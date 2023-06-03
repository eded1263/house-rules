import { ActionTree, MutationTree } from 'vuex'
import {
  ApiResponse,
  ApiResponseWithPagination,
  Pagination,
} from '~/dto/api-response.dto'
import { CreateHouseRuleDto, HouseRule } from '~/dto/house-rule.dto'

export const state = () => ({
  rules: [] as HouseRule[],
  rule: {} as HouseRule,
  pagination: {} as Pagination,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_RULE: (state, rule: HouseRule) => (state.rule = rule),
  SET_RULES: (state, res: ApiResponseWithPagination<HouseRule>) => {
    state.rules = res.data.entities
    state.pagination = res.data.pagination
  },
}

export enum HouseRulesMutations {
  SET_RULE = 'SET_RULE',
  SET_RULES = 'SET_RULES',
}

export enum HouseRulesActions {
  FETCH_RULES = 'FETCH_RULES',
  FETCH_RULE = 'FETCH_RULE',
  POST_RULE = 'POST_RULE',
  PUT_RULE = 'PUT_RULE',
  DELETE_RULE = 'DELETE_RULE',
}

export const actions: ActionTree<RootState, RootState> = {
  async FETCH_RULES({ commit }) {
    const response = await this.$axios.$get<
      ApiResponseWithPagination<HouseRule>
    >('/house_rules')
    commit(HouseRulesMutations.SET_RULES, response)
  },
  async FETCH_RULE({ commit }, id: number) {
    const response = await this.$axios.$get<ApiResponse<HouseRule>>(
      `/house_rules/${id}`
    )
    return commit(HouseRulesMutations.SET_RULE, response.data)
  },
  async POST_RULE({ dispatch }, newRule: CreateHouseRuleDto) {
    await this.$axios.$post(`/house_rules`, {
      house_rules: newRule,
    })
    return dispatch(HouseRulesActions.FETCH_RULES)
  },
  async PUT_RULE(
    { dispatch },
    params: { id: number; updatedRule: CreateHouseRuleDto }
  ) {
    await this.$axios.$put(`/house_rules/${params.id}`, {
      house_rules: params.updatedRule,
    })
    return dispatch(HouseRulesActions.FETCH_RULES)
  },
  async DELETE_RULE({ dispatch }, id: number) {
    await this.$axios.$delete(`/house_rules/${id}`)
    return dispatch(HouseRulesActions.FETCH_RULES)
  },
}
