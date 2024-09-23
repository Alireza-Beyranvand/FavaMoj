import { Box } from "@mui/material";
import MegaMenu from "@/src/components/navbar/megaMenu/MegaMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ Language, dict }) => {


    // const { buttonName, link, active, Language } = props;
    const optionsMegaMenu = Language?.navbar.megaMenu;


    // current Location
    const route = usePathname();



    return (
        <Box sx={{
            gap: {
                md: 3,
                lg: 8
            },
            flexGrow: 8,
            justifyContent: "center"
        }}
            display={{
                xs: "none",
                md: "flex"
            }}>
            <MegaMenu Language={Language}
                buttonName={dict.startsWith("en") ? "Contact us" : "ارتباط با ما"}
                options={optionsMegaMenu}
            />
            {Language.navbar.navLink && Language.navbar.navLink.map((ND, index) => (
                <Link href={ND.links} key={index}>
                    <MegaMenu buttonName={ND.title}
                        active={route.split("/fa" || "/en-us").includes(ND.links) ? true : false}
                        options={ND.items && ND.items[index]}
                    />
                </Link>
            ))}
        </Box>
    )
}

export default NavLink