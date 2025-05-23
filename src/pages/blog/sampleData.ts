
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  slug?: string;
}

// Sample blog posts for testing and development
const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Como saber se é hora de trocar a bateria do seu iPhone",
    excerpt: "Saiba identificar os principais sinais de que sua bateria está no fim e entenda o momento ideal para substituí-la.",
    content: `A bateria do iPhone é um dos componentes que mais sofre desgaste ao longo do tempo. Com o uso diário, ciclos de carregamento e descarregamento, é natural que seu desempenho diminua gradualmente.

A Apple projeta as baterias do iPhone para reter até 80% de sua capacidade original após 500 ciclos completos de carga. Isso significa que, após aproximadamente um ano e meio a dois anos de uso moderado, você pode começar a notar diferenças no desempenho da bateria.

Existem alguns sinais claros de que sua bateria precisa ser substituída. O mais óbvio é quando o iPhone desliga inesperadamente, mesmo mostrando um percentual razoável de carga. Outro indicador importante é quando o dispositivo começa a esquentar excessivamente durante o uso normal ou carregamento.

Se o seu iPhone não consegue mais durar um dia inteiro de uso moderado sem precisar de recarga, isso também é um forte sinal de desgaste da bateria. A Apple disponibiliza uma ferramenta em Ajustes > Bateria > Saúde da Bateria que mostra a capacidade máxima atual em porcentagem.

Quando a capacidade máxima cai abaixo de 80%, a Apple recomenda a substituição da bateria. Nesse ponto, o sistema pode até ativar o "Gerenciamento de Desempenho", que limita o desempenho do processador para evitar desligamentos inesperados.

Lembre-se de que trocar a bateria em um centro de serviço autorizado como a Link TI garante o uso de peças genuínas Apple e mantém a integridade do seu dispositivo. Diferente de assistências não autorizadas, temos certificação para realizar o procedimento com segurança e qualidade.`,
    date: "15 de abril, 2025",
    image: "placeholder.svg",
    category: "repairs",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Dicas para proteger seu MacBook de danos físicos",
    excerpt: "Conheça as melhores práticas para manter seu MacBook protegido contra quedas, poeira, líquidos e outros danos comuns.",
    content: `Seu MacBook é um investimento valioso que merece os melhores cuidados para garantir sua durabilidade e funcionalidade por muitos anos. Aqui estão algumas dicas essenciais para protegê-lo de danos físicos:

Use uma capa protetora de qualidade. Uma capa rígida ou soft case pode proteger seu MacBook contra arranhões, pequenas quedas e impactos. Procure capas com ventilação adequada para evitar superaquecimento.

Invista em uma bolsa ou mochila específica para laptops. Estes acessórios são projetados com compartimentos acolchoados que absorvem impactos e mantêm seu dispositivo seguro durante o transporte.

Utilize uma película protetora para a tela. A tela do MacBook é extremamente sensível e pode ser facilmente danificada. Uma película de qualidade ajuda a prevenir arranhões sem comprometer a qualidade visual.

Mantenha líquidos longe do seu MacBook. Um derramamento acidental pode causar danos irreversíveis aos componentes internos. Se precisar beber algo enquanto trabalha, use garrafas ou copos com tampa.

Limpe regularmente seu MacBook com produtos adequados. A poeira acumulada pode afetar o desempenho e causar superaquecimento. Use apenas panos de microfibra secos para a tela e compressores de ar para o teclado.

Evite temperaturas extremas. Não deixe seu MacBook exposto ao sol direto ou em ambientes muito frios, pois isso pode danificar a bateria e outros componentes sensíveis.

Desligue corretamente seu MacBook. Fechar a tampa não é o mesmo que desligá-lo adequadamente. Sempre use o menu de desligamento para prevenir corrupção de dados e problemas no sistema.

Siga estas recomendações simples e seu MacBook permanecerá em ótimo estado por muito mais tempo, evitando reparos desnecessários e preservando seu investimento.`,
    date: "08 de abril, 2025",
    image: "placeholder.svg",
    category: "tips",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Novidades do iOS 19 que você precisa conhecer",
    excerpt: "Descubra os recursos mais interessantes da nova versão do sistema operacional da Apple e como aproveitá-los.",
    content: `O iOS 19 chegou com uma série de novidades empolgantes que prometem transformar a experiência do usuário com dispositivos Apple. Neste artigo, vamos explorar as principais funcionalidades e como você pode aproveitar ao máximo cada uma delas.

A Inteligência Artificial da Apple deu um salto significativo nesta versão. O novo sistema Apple Intelligence está integrado em praticamente todos os aplicativos nativos, oferecendo sugestões contextuais mais precisas, respostas mais naturais da Siri e automações mais inteligentes.

A Central de Controle foi completamente redesenhada, permitindo personalização total dos controles e até mesmo a criação de módulos personalizados para suas necessidades específicas. Você pode reorganizar, adicionar ou remover controles com facilidade sem precedentes.

A privacidade, marca registrada da Apple, recebeu ainda mais atenção. O novo Relatório de Privacidade oferece visibilidade detalhada sobre quais aplicativos estão acessando seus dados e com que frequência. Além disso, o sistema agora notifica quando detecta padrões suspeitos de acesso.

Para os amantes de fotografia, a câmera recebeu atualizações impressionantes. O novo modo Profissional permite controle manual sobre todos os aspectos da captura, incluindo velocidade do obturador, ISO e balanço de branco, aproximando a experiência de uma câmera DSLR.

O modo de Foco evoluiu para se adaptar automaticamente às suas atividades diárias, aprendendo seus padrões e ajustando notificações e disponibilidade sem intervenção manual. A transição entre diferentes contextos (trabalho, casa, exercícios) ficou mais fluida e intuitiva.

A bateria também recebeu atenção especial com o novo modo Adaptativo de Energia, que ajusta dinamicamente o desempenho do sistema com base nos seus padrões de uso, priorizando aplicativos mais utilizados e otimizando aqueles em segundo plano.

Para atualizar seu dispositivo para o iOS 19, certifique-se de que seu iPhone é compatível (iPhone XR e posteriores), faça um backup completo antes de iniciar e conecte-se a uma rede Wi-Fi estável para fazer o download da atualização.`,
    date: "02 de abril, 2025",
    image: "placeholder.svg",
    category: "news",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Como fazer backup do seu iPhone corretamente",
    excerpt: "Aprenda a garantir que seus dados estejam sempre seguros com o método certo de backup para seu dispositivo.",
    content: `Fazer backup do seu iPhone regularmente é essencial para proteger suas fotos, mensagens, aplicativos e outros dados importantes. Existem basicamente dois métodos principais para fazer backup: iCloud e iTunes/Finder. Vamos explorar ambos para que você escolha o mais adequado às suas necessidades.

Backup pelo iCloud:
O backup pelo iCloud é feito diretamente do seu dispositivo e não requer conexão com um computador. Para ativá-lo, vá em Ajustes > [seu nome] > iCloud > Backup do iCloud e ative a opção "Backup do iCloud". Você pode iniciar um backup manual tocando em "Fazer Backup Agora" ou deixar que aconteça automaticamente quando o dispositivo estiver carregando, bloqueado e conectado ao Wi-Fi.

A Apple oferece 5GB de armazenamento gratuito no iCloud, que pode não ser suficiente para muitos usuários. Considere assinar um plano com mais espaço se necessário.

Backup pelo computador (iTunes ou Finder):
Se preferir não usar o iCloud ou quiser um backup adicional, você pode conectar seu iPhone ao computador. No Windows e macOS Mojave ou anterior, use o iTunes. No macOS Catalina ou posterior, use o Finder.

Após conectar o dispositivo, abra o iTunes ou o Finder, selecione seu iPhone e clique em "Fazer backup agora". Recomendamos selecionar a opção "Criptografar backup local" para incluir dados confidenciais como senhas de Wi-Fi e informações de saúde.

Frequência recomendada:
O ideal é fazer backups semanais se você usa seu dispositivo moderadamente. Se você tira muitas fotos ou faz alterações importantes com frequência, considere backups diários. Antes de atualizar o sistema operacional ou antes de reparos, um backup é essencial.

Verificação de backups:
Para verificar se seu backup do iCloud foi bem-sucedido, vá em Ajustes > [seu nome] > iCloud > Gerenciar Armazenamento > Backups. Para backups no computador, você pode verificar a data e o tamanho do último backup no iTunes ou Finder.

Lembre-se que alguns dados podem não ser incluídos em nenhum tipo de backup, como conteúdos de serviços de streaming ou arquivos já armazenados em outros serviços de nuvem. Certifique-se de verificar o que está e o que não está sendo salvo.`,
    date: "28 de março, 2025",
    image: "placeholder.svg",
    category: "tutorials",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Por que seu iPad está lento e como resolver",
    excerpt: "Entenda as causas comuns de lentidão em iPads e aprenda soluções práticas para melhorar o desempenho.",
    content: `Seu iPad está ficando cada vez mais lento? Antes de pensar em substituí-lo, existem várias medidas que podem ajudar a restaurar seu desempenho. Vamos explorar as causas comuns de lentidão e como resolvê-las.

Armazenamento quase cheio:
Um dos principais culpados pela lentidão é o armazenamento sobrecarregado. Quando seu iPad está com pouco espaço livre, o sistema operacional não consegue funcionar adequadamente. Verifique o espaço disponível em Ajustes > Geral > Armazenamento do iPad.

Solução: Remova aplicativos não utilizados, fotos e vídeos duplicados, e limpe o cache dos navegadores. Considere transferir fotos e vídeos para serviços de nuvem como iCloud ou Google Photos.

Aplicativos em segundo plano:
Muitos aplicativos continuam rodando em segundo plano, consumindo recursos do sistema. Para verificar quais estão ativos, dê dois cliques no botão Home (ou deslize para cima da parte inferior em iPads sem botão Home).

Solução: Feche os aplicativos que não estão sendo utilizados deslizando-os para cima na visualização de aplicativos recentes.

Sistema operacional desatualizado:
Versões antigas do iPadOS podem conter bugs que afetam o desempenho, e as atualizações frequentemente incluem otimizações de velocidade.

Solução: Verifique se há atualizações em Ajustes > Geral > Atualização de Software e mantenha seu dispositivo sempre atualizado.

Recursos visuais excessivos:
Efeitos visuais como transparência e animações podem sobrecarregar dispositivos mais antigos.

Solução: Ative o modo de baixo consumo em Ajustes > Bateria e reduza os efeitos visuais em Ajustes > Acessibilidade > Movimento > Reduzir Movimento.

Reinicialização raramente feita:
Assim como computadores, iPads precisam ser reiniciados ocasionalmente para limpar a memória temporária e resolver pequenos problemas de software.

Solução: Reinicie seu iPad semanalmente mantendo pressionado o botão de ligar até aparecer "Deslize para desligar".

Se mesmo após essas medidas seu iPad continuar com desempenho insatisfatório, pode ser necessária uma restauração completa do sistema (não esqueça de fazer backup!) ou, em último caso, considerar a substituição da bateria em um centro de serviço autorizado como a Link TI, especialmente se o dispositivo tiver mais de dois anos de uso.`,
    date: "22 de março, 2025",
    image: "placeholder.svg",
    category: "tips",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "Apple lança novo programa de reciclagem de dispositivos",
    excerpt: "Conheça a nova iniciativa da Apple para tornar o descarte de dispositivos mais sustentável e ecológico.",
    content: `A Apple acaba de anunciar uma expansão significativa do seu programa de reciclagem, reafirmando seu compromisso com a sustentabilidade e responsabilidade ambiental. Esta iniciativa representa mais um passo na direção do ambicioso objetivo da empresa de utilizar apenas materiais reciclados ou renováveis em todos os seus produtos.

O novo programa, chamado Apple Renew+, permite que consumidores enviem dispositivos antigos diretamente para centros de reciclagem especializados ou os entreguem em lojas Apple e revendedores autorizados como a Link TI. Os dispositivos em bom estado de funcionamento podem gerar créditos para compras futuras, enquanto aqueles danificados serão desmontados para recuperação de materiais valiosos.

Uma das inovações mais impressionantes do programa é a introdução do robô de desmontagem Daisy de segunda geração. Este sistema automatizado consegue desmontar até 23 modelos diferentes de iPhone, recuperando materiais como ouro, prata, alumínio e elementos de terras raras com uma eficiência nunca antes vista. A nova versão do Daisy processa até 2,7 milhões de dispositivos por ano, representando um aumento de 30% em relação ao modelo anterior.

A Apple também expandiu sua rede de parceiros de reciclagem em todo o mundo, garantindo que mesmo consumidores em regiões remotas possam participar do programa. No Brasil, o programa estará disponível inicialmente nas capitais e principais centros urbanos, com planos de expansão para outras regiões nos próximos anos.

Além do benefício ambiental óbvio, a iniciativa tem um importante impacto econômico. A recuperação de minerais e metais raros reduz a necessidade de mineração, uma atividade frequentemente associada a graves problemas ambientais e sociais. Estima-se que para cada milhão de iPhones reciclados, é possível recuperar materiais que equivalem a extrair 2.000 toneladas de minério.

Para participar do programa, consumidores podem visitar o site da Apple ou um revendedor autorizado como a Link TI para receber instruções detalhadas sobre como enviar ou entregar seus dispositivos antigos. Todos os dados pessoais são completamente apagados durante o processo, garantindo a privacidade dos usuários.

Esta nova fase do programa de reciclagem da Apple representa mais um passo importante rumo a uma economia circular no setor de tecnologia, onde recursos são reutilizados em vez de descartados, reduzindo significativamente o impacto ambiental da indústria.`,
    date: "15 de março, 2025",
    image: "placeholder.svg",
    category: "news",
    readTime: "3 min",
  },
];

// Function to fetch all blog posts
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(BLOG_POSTS);
    }, 500);
  });
};

// Function to fetch a single post by ID
export const getSamplePost = async (id: string | undefined): Promise<BlogPost | null> => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!id) {
        resolve(null);
        return;
      }
      
      const postId = parseInt(id, 10);
      const post = BLOG_POSTS.find(p => p.id === postId);
      resolve(post || null);
    }, 500);
  });
};
