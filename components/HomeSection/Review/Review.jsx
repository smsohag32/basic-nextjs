import Image from "next/image";

const Review = () => {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwYmFja2dyb3VuZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
        alt=""
        width={400}
        height={250}
      ></Image>
      <p className="text-5xl">Review Section</p>
    </div>
  );
};

export default Review;
