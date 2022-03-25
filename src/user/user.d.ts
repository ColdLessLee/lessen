declare namespace USER_FORM {
  export interface loginForm {
    username: string
    password: string
    email?: string
  }
}
interface ResponseDATA {
  data: Record<string, unknown>
  meta: { status: number; msg: string }
}
