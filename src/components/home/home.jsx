import Form from '../form/container/form';
import { labels } from '../../constants';

export default function Home() {
  return <Form label={labels.enterName} />;
}
