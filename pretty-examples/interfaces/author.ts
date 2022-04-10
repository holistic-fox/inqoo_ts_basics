export interface Author{
    firstName: string,
    secondName?: string,
    lastName: string,
    birthDate: Date,
    description?: string,
    getAge: (birthDate: Date) => number
}
