import { v4 as UUID } from "uuid";

export interface IProps {
    id?: string;
    firstName: string;
    lastName: string;
    jobPosition: string;
    age: number;
    active: boolean;
}

export interface IListInterface extends IProps {
    fullName: string;
    createdAt: number;
}

export default class EmployeeModel {
    private _id: string;
    private _firstName: string;
    private _lastName: string;
    private _fullName: string;
    private _jobPosition: string;
    private _age: number;
    private _active: boolean;
    private _createdAt: number;
    constructor({
        id = UUID(),
        firstName = '',
        lastName = '',
        jobPosition = '',
        age = 0,
        active = true
    }: IProps) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullName = `${lastName}, ${firstName}`;
        this._jobPosition = jobPosition;
        this._age = age;
        this._active = active;
        this._createdAt = new Date().getTime();
    }
    set id(value: string) {
        this._id = value;
    }

    get id(): string {
        return this._id;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get firstName(): string {
        return this._firstName;
    }
    
    set lastName(value: string) {
        this._lastName = value;
    }

    get lastName(): string {
        return this._lastName;
    }
    
    set fullName(value: string) {
        this._fullName = value;
    }

    get fullName(): string {
        return this._fullName;
    }
    
    set jobPosition(value: string) {
        this._jobPosition = value;
    }

    get jobPosition(): string {
        return this._jobPosition;
    }
    
    set age(value: number) {
        this._age = value;
    }

    get age(): number {
        return this._age;
    }
    
    set active(value: boolean) {
        this._active = value;
    }

    get active(): boolean {
        return this._active;
    }
    
    set createdAt(value: number) {
        this._createdAt = value;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    toEntityMappings(): IListInterface {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: this.fullName,
            jobPosition: this.jobPosition,
            age: this.age,
            active: this.active,
            createdAt: new Date().getTime(),
        };
    }
}