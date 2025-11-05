export interface NavItem {
    label: string;
    href: string;
}

export interface Car {
    id: number;
    name: string;
    registration_number: string;
    is_registered: boolean;
    parts?: Part[];
    created_at: string;
    updated_at: string;
}

export interface Part {
    id: number;
    car_id: number;
    serial_number: string;
    name: string;
    car: {
        name: string;
    };
    created_at: string;
    updated_at: string;
}

export type CarFormData = {
    name: string;
    registration_number: string;
    is_registered: boolean;
    parts: {
        name: string;
        serial_number: string;
    }[];
};

export type PartFormData = {
    car_id?: number;
    serial_number: string;
    name: string;
};

export type CarFiltersData = {
    name: string;
    registration_number: string;
    is_registered: string;
};

export type PartFiltersData = {
    serial_number: string;
    name: string;
};
