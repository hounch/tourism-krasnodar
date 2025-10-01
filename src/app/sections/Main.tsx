import Header from "../ui/header";
import Menu from "../ui/menu";
import Block from "../ui/block";

export default async function Main() {
  return (
    <>
      <Header />
      <Menu />
      <div className="big-card flex h-[31.63rem] items-center justify-center relative">
        <Block className="w-[88rem] h-full mx-auto rounded-[1.5rem]" />
        <div className="absolute z-20 flex justify-between items-center w-[88rem] h-[12.5rem]">
          <div className="intro absolute grid-cols-[2rem_40rem_29.875rem_14.125rem_2rem] grid-rows-[2rem_9rem_9.19rem_3.75rem_7.69rem] grid">
            {/* absolute z-20 flex justify-between items-center w-[88rem] h-[12.5rem] */}
            <h1 className="text-black font-bold text-[3.75rem] col-span-1 col-start-2 row-span-1 row-start-2">
              Встречаемся в Краснодаре
            </h1>
            <Block className="w-[14.13rem] h-[8.06rem] bg-white rounded-[0.75rem] col-span-1 col-start-4 row-span-1 row-start-2" />
          </div>
          <div className="arrow-left col-span-1 col-start-2 row-span-1 row-start-4 mt-[9.19rem] ml-[2.5rem]">
            <button className="w-[3.75rem] bg-white h-[3.75rem] rounded-[0.5rem] p-[1.25rem]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.1629 2.63074C9.3668 2.44456 9.6831 2.45895 9.8693 2.66289C10.0554 2.86683 10.041 3.18309 9.8371 3.36927L3.6693 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H3.6721L9.8371 15.6281C10.041 15.8143 10.0554 16.1305 9.8693 16.3345C9.6831 16.5384 9.3668 16.5528 9.1629 16.3666L2.2465 10.0526C2.1066 9.92482 2.0268 9.75728 2.007 9.58414C2.0024 9.55678 2 9.52867 2 9.5C2 9.47313 2.0021 9.44675 2.0062 9.42103C2.0244 9.24512 2.1045 9.07446 2.2465 8.94478L9.1629 2.63074Z"
                  fill="#212121"
                />
              </svg>
            </button>
          </div>
          <div className="arrow-right col-span-1 col-start-4 row-span-1 row-start-4 mt-[9.19rem] mr-[2.5rem]">
            <button className="w-[3.75rem] bg-white h-[3.75rem] rounded-[0.5rem] p-[1.25rem]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8371 2.63074C10.6332 2.44456 10.3169 2.45895 10.1307 2.66289C9.94456 2.86683 9.95895 3.18309 10.1629 3.36927L16.3307 9H2.5C2.22386 9 2 9.22386 2 9.5C2 9.77614 2.22386 10 2.5 10H16.3279L10.1629 15.6281C9.95895 15.8143 9.94456 16.1305 10.1307 16.3345C10.3169 16.5384 10.6332 16.5528 10.8371 16.3666L17.7535 10.0526C17.8934 9.92482 17.9732 9.75728 17.993 9.58414C17.9976 9.55678 18 9.52867 18 9.5C18 9.47313 17.9979 9.44675 17.9938 9.42103C17.9756 9.24512 17.8955 9.07446 17.7535 8.94478L10.8371 2.63074Z"
                  fill="#212121"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="cards w-[88rem] flex mx-auto mt-[1rem]">
        <Block className="w-[43.5rem] h-[17.06rem] mr-[1rem] rounded-[1.5rem]" />
        <Block className="w-[43.5rem] h-[17.06rem] rounded-[1.5rem]" />
      </div>
    </>
  );
}
