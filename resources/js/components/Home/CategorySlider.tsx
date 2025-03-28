const categories = [
    'All',
    'Music',
    'Gaming',
    'News',
    'Sports',
    'Education',
    'Technology',
    'Movies',
    'Live',
    'Trending',
    'Science',
    'Health',
    'Fashion',
    'Business',
    'Travel',
    'Food',
    'DIY',
    'History',
    'Comedy',
    'Animation',
];

const CategorySlider = () => {
    return (
        <div className="category-slider overflow-x-auto py-3 px-4">
            <div className="flex gap-3 whitespace-nowrap">
                {categories.map((category, index) => (
                    <p key={index} className="cursor-pointer text-sm rounded-full bg-black/80 px-4 py-2 text-white hover:bg-black/90">
                        {category}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CategorySlider;
