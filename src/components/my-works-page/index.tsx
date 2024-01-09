import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  styled,
} from '@mui/material'

const Title = styled(Typography)({
  marginBottom: '16px',
  borderBottom: '1px solid',
  paddingBottom: '8px',
})

const StyledCard = styled(Card)({
  marginBottom: '16px',
})

const StyledCardMedia = styled(CardMedia)({
  height: '140px',
})

interface Project {
  id: number
  title: string
  image: string
  technologies: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Сайт для "ООО ЯРКО"',
    image: '/images/1.png',
    technologies: ['React', 'TypeScript', 'Reduxe', 'TailWind'],
    link: 'https://busines-plan-full-app-frontend.vercel.app/',
  },
  {
    id: 2,
    title: 'Сайт для компании "Onkron"'
    image: '/images/project2.jpg',
    technologies: ['React', 'Material-UI', 'React Router'],
    link: 'https://onkron-website.vercel.app/'
  },
  {
    id: 3,
    title: 'Project 3',
    image: '/images/project3.jpg',
    technologies: ['React', 'Material-UI', 'React Router'],
    link: '/project3',
  },
  {
    id: 4,
    title: 'Project 4',
    image: '/images/project4.jpg',
    technologies: ['React', 'Material-UI', 'React Router'],
    link: '/project4',
  },
]

const MyWorksPage: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: '20vh',
      }}
    >
      <Title variant="h4">Мои работы</Title>

      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} key={project.id} mt={3}>
            <StyledCard>
              <CardActionArea component={Link} to={project.link}>
                <Tooltip title="Перейти на страницу" placement="top">
                  <StyledCardMedia>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </StyledCardMedia>
                </Tooltip>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.technologies.join(', ')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default MyWorksPage
