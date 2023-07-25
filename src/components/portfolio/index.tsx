import React from 'react'
import {
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material'
import {
  Person as PersonIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material'

const Portfolio: React.FC = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Обо мне
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Привет, я - <span style={{ color: '#b5895a' }}>Эрик</span>,
                Frontend-developer со стеком технологий{' '}
                <span style={{ color: '#b5895a' }}>React</span> и{' '}
                <span style={{ color: '#b5895a' }}>TypeScript</span>. Моя цель в
                разработке программного обеспечения - создавать инновационные и
                качественные веб-приложения, которые привлекают внимание
                пользователей и улучшают их онлайн-опыт. Мой опыт работы с{' '}
                <span style={{ color: '#b5895a' }}>React</span> позволяет мне
                создавать динамичные и отзывчивые пользовательские интерфейсы. Я
                умею разрабатывать компоненты, реализовывать маршрутизацию и
                управлять состоянием приложения с помощью библиотеки{' '}
                <span style={{ color: '#b5895a' }}>Redux</span>. Мой опыт в{' '}
                <span style={{ color: '#b5895a' }}>TypeScript</span> помогает
                мне создавать надежный и безопасный код, обеспечивая типизацию
                данных и предотвращая ошибки на этапе разработки. Кроме того, я
                имею опыт работы с другими современными инструментами и
                библиотеками, такими как{' '}
                <span style={{ color: '#b5895a' }}>
                  HTML5, CSS3, Sass, TailWindCSS, Material UI, Axios, Docker и
                  Git
                </span>
                . Я стремлюсь к постоянному обучению и исследованию новых
                технологий, чтобы быть в курсе последних трендов в
                веб-разработке. Я коммуникабельный и внимательный к деталям
                разработчик, готовый работать в команде. Я стремлюсь к
                постоянному улучшению своих навыков и способностей, чтобы
                создавать высококачественный код и достигать целей проекта. Если
                вам требуется Frontend-developer с опытом работы с{' '}
                <span style={{ color: '#b5895a' }}>React</span> и{' '}
                <span style={{ color: '#b5895a' }}>TypeScript</span>, я готов
                внести свой вклад в вашу команду и помочь вам достичь успеха в
                ваших проектах. С нетерпением жду возможности обсудить детали и
                потенциальное сотрудничество.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Контакты
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Eric Sharipov" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link href="mailto:evangelipeep@gmail.com">
                        evangelipeep@gmail.com
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link href="https://github.com/evangelipeep">GitHub</Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TelegramIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Link href="https://t.me/berikard">Telegram</Link>}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Portfolio
