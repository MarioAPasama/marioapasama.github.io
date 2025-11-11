export interface Skill {
    icon: string;
    label: string;
    type: string;
    status: string | null;
}

export interface SocialMedia {
    icon: string;
    label: string;
    link: string | null;
}

export interface Contact {
    email: string;
    phone: string;
    address: string;
}

export interface Position {
    name_position: string;
    description_html: string | null;
    address: string;
    start_date: string;
    end_date: string;
}

export interface Experience {
    logo: string;
    company: string;
    position: Position[];
}

export interface Profile {
    name: string;
    description: string;
    img_profile: string;
    skill: Skill[];
    social_media: SocialMedia[];
    contact: Contact;
    experience: Experience[];
}
