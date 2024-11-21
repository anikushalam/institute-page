import { useNoticeInstitute } from "@/api/api-hooks";
import SubHeading from "../ui/sub-heading";
import { useStore } from "@/store";
import dayjs from "dayjs";

const Notice = ({ bgTheme }: { bgTheme: any }) => {
  const id = useStore((state) => state.id);
  const { data: notices } = useNoticeInstitute({
    id: id,
    page: 1,
    limit: 1000,
  });

  return (
    <>
      <div className="md:h-[30rem] overflow-hidden">
        <SubHeading className="font-extrabold text-[1.2rem] -mt-4 -mb-3 -ml-2">
          Notice
        </SubHeading>
        <ul className="mt-4">
          {notices?.announcement?.map((item: any, index: any) => (
            <li
              key={index}
              className="mb-3 bg-[#eee] h-[3.1rem] flex justify-start items-center"
            >
              <div
                style={{
                  backgroundColor: bgTheme ? bgTheme : "inherit",
                }}
                className="flex justify-center items-center h-full w-10"
              >
                <p className="text-white text-center text-sm">
                  {dayjs(item?.createdAt)?.format("MMM DD")}
                </p>
              </div>
              <button
                className={`w-full h-full text-left pt-1 pb-2 text-[11px] px-4 hover:text-primary hover:font-bold border-b-2 hover:border-primary duration-300 border-transparent`}
              >
                {item.insAnnTitle}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Notice;
