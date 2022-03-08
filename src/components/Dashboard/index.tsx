import { Summary } from '../Summary';
import { TransactionsTable } from '../TansactionsTable/idex';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
