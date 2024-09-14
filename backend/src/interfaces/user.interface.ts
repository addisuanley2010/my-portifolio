
export interface IUser {
        _id?: string;
        full_name: string;
        user_name: string;
        gender: string;
        phone: string;
        email: string;
        address: string;
        qualification: string;
        password: string;
        verified: boolean;
        role: string;
}
export interface ISkill {

        _id?: string;
        skill_name: string
        skill_percent?: number
}