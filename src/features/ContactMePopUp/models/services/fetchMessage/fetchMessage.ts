import axios from 'axios';
import { ContactForm } from '../validationForm/validationForm';

function generateMessage(values: ContactForm) {
	return `<b><u>User name:</u></b>  <code>${values.username}</code>\n\n<b><u>User Contact</u></b>  <code>${values.contact}</code>\n\n<b><u>Message:</u></b>\n<code>${values.message}</code>`;
}

export const fetchMessage = async (values: ContactForm) => {
	return axios
		.post(`https://api.telegram.org/${process.env.NEXT_PUBLIC_BOT}/sendMessage`, {
			chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
			parse_mode: process.env.NEXT_PUBLIC_PARSE_MODE,
			text: generateMessage(values),
		})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.log(`ERROR: ${err.message}`);
			return 'error';
		});
};
