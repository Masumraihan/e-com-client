import { TKeyword } from "@/app/types";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type TKeywordBadgeProps = {
  keyword: TKeyword;
  currentKeywords: TKeyword[];
  setCurrentKeywords: React.Dispatch<React.SetStateAction<TKeyword[]>>;
};

const KeywordBadge = ({ keyword, currentKeywords, setCurrentKeywords }: TKeywordBadgeProps) => {
  return (
    <Badge
      variant={"outline"}
      key={keyword?.value}
      className={cn(
        "data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground",
        "data-[fixed]:bg-muted-foreground data-[fixed]:text-muted data-[fixed]:hover:bg-muted-foreground",
      )}
    >
      {keyword?.value}
      <button
        className={
          "ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
        }
        onClick={(e) => {
          e.preventDefault();
          const selectedKeyword = currentKeywords?.find((k) => k?.value === keyword?.value);
          const otherKeywords = currentKeywords?.filter((k) => k?.value !== keyword?.value);
          if (selectedKeyword) {
            setCurrentKeywords([...otherKeywords, { ...selectedKeyword, isDelete: true }]);
          }
        }}
      >
        <X className='w-3 h-3 text-muted-foreground hover:text-foreground' />
      </button>
    </Badge>
  );
};

export default KeywordBadge;
