import React, { useState, FormEvent } from 'react'
import {
  Button,
  Container,
  TextField,
  Box,
  Typography,
  colors,
  Snackbar,
} from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import axios from 'axios'

const TOKEN = '6204335027:AAGGWX6BUg3XQWFSasG2Z2yg_Wj1rzGW5Mw'
const CHAT_ID = '-1001752310774'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

interface TelegramMessage {
  senderName: string
  messageBody: string
}

const TelegramForm: React.FC = () => {
  const [senderName, setSenderName] = useState('')
  const [messageBody, setMessageBody] = useState('')
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const telegramMessage: TelegramMessage = {
      senderName,
      messageBody,
    }

    try {
      await axios.post(URI_API, {
        chat_id: CHAT_ID,
        text: `Имя отправителя: ${senderName}\n\nСообщение: ${messageBody}`,
      })
      setSuccessSnackbarOpen(true)
    } catch (error) {
      console.error(
        'Произошла ошибка при отправке сообщения в телеграм:',
        error
      )
    }

    setSenderName('')
    setMessageBody('')
  }

  const handleSnackbarClose = () => {
    setSuccessSnackbarOpen(false)
  }

  return (
    <Container
      maxWidth="xs"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
        marginTop={8}
        bgcolor="white"
        borderRadius={10}
        boxShadow={1}
        sx={{ width: '100%', maxWidth: 400 }}
      >
        <TelegramIcon sx={{ fontSize: 48 }} color="secondary" />
        <Typography
          style={{ color: 'black' }}
          variant="h6"
          component="h1"
          align="center"
          mt={2}
          mb={2}
        >
          Вы можете отправить мне сообщения в Telegram
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Имя отправителя"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
            fullWidth
            margin="normal"
            color="secondary"
          />
          <TextField
            label="Сообщение"
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
            color="secondary"
          />
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Отправить
          </Button>
        </form>
      </Box>
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Сообщение успешно отправлено в Telegram"
      />
    </Container>
  )
}

export default TelegramForm
