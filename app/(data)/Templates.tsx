export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog depends on your provide information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog idea in a bullet wise only(No Description) based on given niche and outline and give me result in rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },
    {
        "name": "Blog Content",
        "desc": "An AI tool that generates blog content based on the information you provide",
        "category": "Blog",
        "icon": "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
        "aiPrompt": "Generate detailed blog content based on the given niche and outline and provide the result in a rich text editor format",
        "slug": "generate-blog-content",
        "form": [
            {
                "label": "Enter your blog niche",
                "field": "input",
                "name": "niche",
                "required": true
            },
            {
                "label": "Enter blog outline",
                "field": "textarea",
                "name": "outline"
            }
        ]
    },
    {
        "name": "Blog Topic Ideas",
        "desc": "An AI tool that generates blog topic ideas based on the information you provide",
        "category": "Blog",
        "icon": "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
        "aiPrompt": "Generate a list of blog topic ideas based on the given niche and outline and provide the result in a rich text editor format",
        "slug": "generate-blog-topic-ideas",
        "form": [
            {
                "label": "Enter your blog niche",
                "field": "input",
                "name": "niche",
                "required": true
            },
            {
                "label": "Enter blog outline",
                "field": "textarea",
                "name": "outline"
            }
        ]
    }



]