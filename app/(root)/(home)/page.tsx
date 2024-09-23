import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const today: Date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate: string = today.toLocaleDateString("en-US", options);

  const formattedTime: string = today.toLocaleTimeString("en-US", timeOptions);

  return (
    <section className="flex size-full flex-col gap-10 text-white ">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex p-5 h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism py-2 max-w-[270px] text-center text-base font-normal">
            Upcoming Meeting at: 10:15 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {formattedTime}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
