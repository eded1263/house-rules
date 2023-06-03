export interface Pagination {
  total: number
  count: number
  per_page: number
  current_page: number
  total_pages: number
  links: {
    next: string | null
    prev: string | null
  }
}

export interface ApiResponseWithPagination<T = null> {
  message: string
  data: {
    entities: T[]
    pagination: Pagination
  }
  success: boolean
}

export interface ApiResponse<T = null> {
  message: string
  data: T
  success: boolean
}
