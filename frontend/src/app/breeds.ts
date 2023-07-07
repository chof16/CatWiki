export interface Breed {
    id:                 string;
    name:               string;
    temperament:        string;
    origin:             string;
    description:        string;
    life_span:          string;
    adaptability:       number;
    affection_level:    number;
    child_friendly:     number;
    grooming:           number;
    health_issues:      number;
    intelligence:       number;
    social_needs:       number;
    stranger_friendly:  number;
    experimental:       number;
    hairless:           number;
    natural:            number;
    rare:               number;
    rex:                number;
    suppressed_tail:    number;
    short_legs:         number;
    wikipedia_url:      string;
    hypoallergenic:     number;
    reference_image_id: string;
}

export interface Weight {
    imperial: string;
    metric:   string;
}