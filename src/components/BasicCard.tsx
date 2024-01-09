import { FC } from 'react'
import { Card, Link, Typography } from '@mui/joy'
import { Link as RouterLink } from 'react-router-dom';

interface BasicCardProps {
  name: string,
  type: string
}

const BasicCard: FC<BasicCardProps> = ({ name, type }) => {
  return (
    <Card variant="soft" className="hover:border-cyan-400 border-neutral-100 border-2 transition ease-in-out duration-300">
      <Link
        overlay
        component={RouterLink}
        to={`/analysis/${name}`}
        underline="none"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between',
        }}
      >
        <Typography level="h3">{name}</Typography>
        <Typography level="body-sm">{type}</Typography>
      </Link>
    </Card>
  )
}

export default BasicCard;
