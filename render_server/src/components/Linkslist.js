import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '8px'}}
        color="#bdbdbd"
    >
        •
    </Box>
);

export default function Links_list(props) {
    const {
        content_links = [],
        ...other
    } = props;
    return (
        <>
        {
            content_links.map((content_link, index, arr) => {
                if (index === arr.length - 1)
                {
                    return (
                        <span key={index}>
                            <Link href={content_link.link_url} underline="none">{content_link.link_name}</Link>
                        </span>
                    )
                }
                else
                {
                    return (
                        <span key={index}>
                            <Link href={content_link.link_url} underline="none">{content_link.link_name}</Link>
                            {bull}
                        </span>
                    )
                }
            })
        }
        </>
    )
};