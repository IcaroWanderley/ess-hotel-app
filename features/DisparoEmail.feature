Scenario: Pagamento com sucesso

Given Estou logado como “cliente”

And Estou na página de “concluir pagamento”

And O cartão que estou usando é válido e tem saldo

When O sistema verifica o pagamento

Then Eu recebo um email com o comprovante de pedido

And Aparece a mensagem de pagamento conclúido com sucesso

Scenario 2: Cartão inválido

Given Estou logado como “cliente”

And Estou na página de “concluir pagamento”

And O cartão que estou usando não é válido

When O sistema verifica o pagamento

Then Eu não devo receber email com compravante do pedido

And Aparece a mensagem de erro no pagamento

Scenario 3: Saldo insuficiente

Given Estou logado como “cliente”

And Estou na página de “concluir pagamento”

And O cartão que estou usando é válido e não tem saldo

When O sistema verifica o pagamento

Then Eu não devo receber email com compravante do pedido

And Aparece a mensagem de erro no pagamento
