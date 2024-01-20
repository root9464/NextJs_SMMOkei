'use client';

import {NextUIProvider} from '@nextui-org/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();

const Provider = ({children}: {children: React.ReactNode}): JSX.Element => {
	return (

		<QueryClientProvider client={queryClient}>

			<NextUIProvider>

				{children}
			</NextUIProvider>
		</QueryClientProvider>

	);
};

export {Provider};
