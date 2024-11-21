import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import TruncateText from "../ui/truncate";
import Image from "next/image";

const DepartmentComponent = ({
  did,
  name,
  shortDes,
}: {
  did: string;
  name: string;
  shortDes: string;
}) => {
  // const { data: departmentInfo } = useDepartmentSiteInfo(did);
  return (
    <Card className="drop-shadow-sm p-[40px] rounded-2 bg-white h-[25rem]">
      <div className=" mb-2 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center rounded-full p-4 bg-gray-100">
          <Image src="/departmentLogo.png" alt="logo" width={40} height={40} />
        </div>
      </div>
      <CardContent className="flex flex-col items-center justify-center text-center  text-xs sm:text-sm relative">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm md:text-base line-clamp-5">
          {shortDes ? <TruncateText text={shortDes}></TruncateText> : ""}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-center flex-shrink-0">
        <Link href={`department/redirect/${did}`}>
          <Button className="hover:opacity-95 hover:bg-primary text-xs md:text-sm lg:text-base">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DepartmentComponent;
