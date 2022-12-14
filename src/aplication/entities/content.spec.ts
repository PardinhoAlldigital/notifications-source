import { Content } from './notification-content';

describe('Notification content', () => {
  test('Deve ser possível eu criar o conteudo da notificação', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  test('Não Deve ser possível eu criar o conteudo com menos de 5 caracters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  test('Não Deve ser possível eu criar o conteudo com mais de 5 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
