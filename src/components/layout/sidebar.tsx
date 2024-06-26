import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("py-16 border min-h-screen", className)}>
      <div className='py-4 space-y-4'>
        <div className='px-3 py-2'>
          <h2 className='px-4 mb-2 text-lg font-semibold tracking-tight'>Overview</h2>
          <div className='space-y-1'>
            <DashboardNav items={navItems}  />
          </div>

          {/* <ScrollArea className="h-[300px] px-1">
            <div className="p-2 space-y-1">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="justify-start w-full font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea> */}
        </div>
      </div>
    </div>
  );
}
