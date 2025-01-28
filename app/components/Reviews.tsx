import ReviewItem from "./Reviews/ReviewItem";

export default function Reviews() {
    return (
        <div className="bg-black-500 grid grid-cols-2 px-8 md:px-16 lg:px-32 2xl:px-64 py-16 md:py-32 lg:py-64 2xl:py-96 gap-12">
            <ReviewItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius!</ReviewItem>
            <ReviewItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius!</ReviewItem>
            <ReviewItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius!</ReviewItem>
            <ReviewItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius!</ReviewItem>
        </div>
    );
}