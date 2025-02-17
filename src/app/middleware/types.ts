// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const user_role = {
    admin : "admin",
    trainer : "trainer",
    trainee : "trainee" 
} as const  
export type TUserRole = keyof typeof user_role