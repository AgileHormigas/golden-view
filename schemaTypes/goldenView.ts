import { defineField } from 'sanity';

const spaTypes = [
    { title: 'Massage Service', value: 'massage services' },
    { title: 'Hair Services', value: 'hair services' },
    { title: 'Nails Services', value: 'nails services' },
    { title: 'Skincare Services', value: 'skincare services' },
    { title: 'Grooming Services', value: 'grooming services' },

];

const goldenView = {
    name: 'goldenView',
    title: 'Golden View',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule =>
                Rule.required().max(50).error('Maximum 50 Characters'),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule =>
                Rule.required().min(100).error('Minimum 50 Characters'),
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule =>
                Rule.required().min(100).error('Minimum 50 Characters'),
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'number',
            initialValue: 0,
            validation: Rule => Rule.min(0),
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'url', type: 'url', title: 'URL' },
                        { name: 'file', type: 'file', title: 'File' },
                    ],
                },
            ],
            validation: Rule =>
                Rule.required().min(3).error('Minimum of 3 images required'),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'object',
            fields: [
                { name: 'url', type: 'url', title: 'URL' },
                { name: 'file', type: 'file', title: 'File' },
            ],
            validation: Rule => Rule.required().error('Cover Image is required'),
        }),
        defineField({
            name: 'type',
            title: 'Spa Type',
            type: 'string',
            options: {
                list: spaTypes,
            },
            validation: Rule => Rule.required(),
            initialValue: 'basic',
        }),
        defineField({
            name: 'specialNote',
            title: 'Special Note',
            type: 'text',
            validation: Rule => Rule.required(),
            initialValue:
                'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
        }),


        defineField({
            name: 'isBooked',
            title: 'Is Booked',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'isFeatured',
            title: 'Is Featured',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{ type: 'review' }],
        }),
    ],
};

export default goldenView;
