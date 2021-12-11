import React from 'react';

import {
	TransactionCard,
	TransactionCardProps,
} from '../../components/TransactionCard';
import { HighlightCard } from '../../components/HighlightCard';

import {
	Container,
	Header,
	UserWrapper,
	UserInfo,
	Photo,
	User,
	UserGreeting,
	UserName,
	Icon,
	HighlightCards,
	Transactions,
	Title,
	TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
	id: string;
}

export function Dashboard() {
	const data: DataListProps[] = [
		{
			id: '1',
			type: 'positive',
			title: 'Desenvolvimento de aplicações',
			amount: 'R$ 12.400,00',
			category: {
				name: 'Vendas',
				icon: 'dollar-sign',
			},
			date: '10/12/2020',
		},
		{
			id: '2',
			type: 'negative',
			title: 'Hamburgueria do João',
			amount: 'R$ 59,00',
			category: {
				name: 'Alimentação',
				icon: 'coffee',
			},
			date: '08/12/2020',
		},
		{
			id: '3',
			type: 'negative',
			title: 'NuBank',
			amount: 'R$ 1.500,00',
			category: {
				name: 'Contas',
				icon: 'credit-card',
			},
			date: '1/12/2020',
		},
	];

	return (
		<Container>
			<Header>
				<UserWrapper>
					<UserInfo>
						<Photo
							source={{
								uri: 'https://avatars.githubusercontent.com/u/20876017?v=4',
							}}
						/>
						<User>
							<UserGreeting>Olá,</UserGreeting>
							<UserName>Jeferson</UserName>
						</User>
					</UserInfo>

					<Icon name="power" />
				</UserWrapper>
			</Header>

			<HighlightCards>
				<HighlightCard
					type="up"
					title="Entradas"
					amount="R$ 17.400,00"
					lastTransaction="Última entrada dia 10 de Dezembro"
				/>
				<HighlightCard
					type="down"
					title="Saídas"
					amount="R$ 1.259,00"
					lastTransaction="Última saída dia 03 de Dezembro"
				/>
				<HighlightCard
					type="total"
					title="Total"
					amount="R$ 16.141,00"
					lastTransaction="01 à 10 de Dezembro"
				/>
			</HighlightCards>

			<Transactions>
				<Title>Listagem</Title>

				<TransactionList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <TransactionCard data={item} />}
				/>
			</Transactions>
		</Container>
	);
}
