
'use client'
import { Link } from 'react-router-dom'
import {
    Barcode,
    CaretDown,
    ChartPie,
    CheckSquare,
    HouseLine,
    PencilLine,
    UserCircle,
    SignOut,
    Stack,
    Users,
    Gear,
    Lifebuoy,
    PresentationChart,
} from 'phosphor-react'
import {  GrContact  } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";


import {
    Avatar,
    AvatarImage,
    Input,
    InputIcon,
    Sidebar,
    SidebarBody,
    SidebarCollapse,
    SidebarDropdown,
    SidebarDropdownList,
    SidebarFooter,
    SidebarItem,
    SidebarList,
    Tooltip,
    TooltipAction,
    TooltipContent,
} from 'keep-react'

export const SideBar = () => {
    return (
        <><Sidebar className="hidden md:block lg:block min-h-screen">
            <SidebarBody>
                <SidebarList className="space-y-0.5">
                <Link to='/Admin'>
                    <SidebarItem>
                    
                        <HouseLine size={20}/>
                        Home
                    </SidebarItem>
                    </Link>
                    <Link to='/Admin/Tenders'>
                    <SidebarItem>
                        <PresentationChart size={20} />
                        Tenders
                    </SidebarItem>
                    </Link>
                    <Link to='/Admin/Secteurs'>
                    <SidebarItem>
                        <Stack size={20} />
                        Secteurs
                    </SidebarItem>
                    </Link>
                    <Link to='/Admin/Utilisateurs'>
                    <SidebarItem>
                        <Users size={20} />
                        Utilisateurs
                    </SidebarItem>
                    </Link>
                    <Link to='/Admin/Abonnements'>
                    <SidebarItem>
                        <CheckSquare size={20} />
                        Abonnements
                    </SidebarItem>
                    </Link>
                    <Link to='/Admin/Administrateurs'>
                    <SidebarItem>
                        <RiAdminFill size={20} />
                        Administrateurs
                    </SidebarItem>
                    </Link>
                    <Link to='/Admin/Contacts'>
                    <SidebarItem>
                        <GrContact size={20} />
                        Contacts
                    </SidebarItem>
                    </Link>
                    <Link to='/Admin/Profile'>
                    <SidebarItem>
                        <UserCircle size={20} />
                        Profile
                    </SidebarItem>
                    </Link>
                    <Link to='/'>
                    <SidebarItem>
                        <SignOut size={20} />
                        Deconnexion
                    </SidebarItem>
                    </Link>
                </SidebarList>
            </SidebarBody>
           
        </Sidebar>


             {/* Side bar Responsive  */}


            <Sidebar className="max-w-max block md:hidden lg:hidden">
                <SidebarBody className="space-y-4">
                    <SidebarList className="space-y-1">
                        <SidebarItem>
                            <Tooltip placement="right" contentOffset={30}>
                                <TooltipAction asChild>
                                <Link to='/Admin'>
                                    <HouseLine size={20} />
                                    </Link>
                                </TooltipAction>
                                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Home</TooltipContent>
                            </Tooltip>
                        </SidebarItem>
                        <SidebarItem>
                            <Tooltip placement="right" contentOffset={30}>
                                <TooltipAction asChild>
                                    <Link to='/Admin/Tenders'>
                                    <PresentationChart size={20} />
                                    </Link>
                                </TooltipAction>
                                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Tenders</TooltipContent>
                            </Tooltip>
                        </SidebarItem>
                        <SidebarItem>
                            <Tooltip placement="right" contentOffset={30}>
                                <TooltipAction asChild>
                                <Link to='/Admin/Secteurs'>
                                    <Stack size={20} />
                                    </ Link>
                                </TooltipAction>
                                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Secteurs</TooltipContent>
                            </Tooltip>
                        </SidebarItem>
                        <SidebarItem>
                            <Tooltip placement="right" contentOffset={30}>
                                <TooltipAction asChild>
                                <Link to='/Admin/Utilisateurs'>
                                    <Users size={20} />
                                    </ Link>
                                </TooltipAction>
                                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Utilisateurs</TooltipContent>
                            </Tooltip>
                        </SidebarItem>
                        <SidebarItem>
                            <Tooltip placement="right" contentOffset={30}>
                                <TooltipAction asChild>
                                <Link to='/Admin/Abonnements'>
                                    <CheckSquare size={20} />
                                    </ Link>
                                </TooltipAction>
                                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Abonnements</TooltipContent>
                            </Tooltip>
                        </SidebarItem>
                        <SidebarItem>
                            <Tooltip placement="right" contentOffset={30}>
                                <TooltipAction asChild>
                                <Link to='/Admin/Administrateurs'>
                                    <RiAdminFill size={20} />
                                    </ Link>
                                </TooltipAction>
                                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Administrateurs</TooltipContent>
                            </Tooltip>
                        </SidebarItem>
                        <SidebarItem>
                            <Tooltip placement="right" contentOffset={30}>
                                <TooltipAction asChild>
                                <Link to='/Admin/Contacts'>
                                    <GrContact size={20} />
                                    </ Link>
                                </TooltipAction>
                                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Contacts</TooltipContent>
                            </Tooltip>
                        </SidebarItem>
                        <SidebarItem>
                            <Tooltip placement="right" contentOffset={30}>
                                <TooltipAction asChild>
                                <Link to='/Admin/Profile'>
                                    <UserCircle size={20} />
                                    </ Link>
                                </TooltipAction>
                                <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Profile</TooltipContent>
                            </Tooltip>
                        </SidebarItem>
                    </SidebarList>
                </SidebarBody>
                <SidebarFooter>
                    <SidebarItem>
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                            <Link to='/Admin'>
                                <SignOut size={20} />
                                </ Link>
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900" onClick={() => {
                            // Déconnecter l'utilisateur
                            localStorage.removeItem("token");
                            setIsAuthenticated(false);
                          }}>Log Out</TooltipContent>
                        </Tooltip>
                    </SidebarItem>
                </SidebarFooter>
            </Sidebar></>
    )
}
