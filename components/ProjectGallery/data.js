// components/ProjectGallery/data.js

export const projects = [
  {
    id: 1,
    title: "Dashboard Comercial com Power BI",
    shortDescription: "Dashboard completo de análise de vendas com foco em insights visuais e decisão estratégica.",
    longDescription: `Este projeto desenvolve um dashboard interativo em Power BI para análise de vendas comerciais.
  
  O dashboard inclui:
  - KPIs de vendas por categoria e fabricante;
  - Análise dos principais influenciadores de vendas;
  - Análise geográfica da performance de vendedores;
  - Storytelling de destaque para insights estratégicos;
  - Navegação organizada por índice temático.
  
  Ferramentas como gráficos Sankey, pie charts, histogramas e mapas geográficos são utilizados para transformar dados brutos em visualizações claras e orientadas para decisão. O objetivo final é fornecer uma plataforma visual de apoio à tomada de decisão comercial estratégica.`,
    technologies: ["Power BI", "DAX", "Storytelling", "Modelagem de Dados", "Geovisualização"],
    images: [
      {
        src: "/images/dashboard-pbi-indice.png",
        caption: "🧭 Índice navegável e organizado por temas de análise."
      },
      {
        src: "/images/dashboard-pbi-narrativa.png",
        caption: "📖 Narrativa inteligente destacando fabricantes líderes e insights de mercado."
      },
      {
        src: "/images/dashboard-pbi-influenciadores.png",
        caption: "🎯 Gráfico de influenciadores apontando variáveis que impactam as vendas."
      },
      {
        src: "/images/dashboard-pbi-categoria-loja.png",
        caption: "🛒 Gráfico Sankey demonstrando a relação entre categorias de produto e lojas."
      },
      {
        src: "/images/dashboard-pbi-mapa.png",
        caption: "🗺️ Mapa interativo exibindo performance de vendas por estado e vendedor."
      }
    ]
  },
  
  {
    id: 2,
    title: "Detecção de Anomalias em Transações Ethereum",
    shortDescription:
      "Machine Learning para identificar comportamentos suspeitos em dados da blockchain Ethereum.",
    longDescription:
      "Este projeto aplica técnicas de Análise Exploratória de Dados (EDA) e algoritmos de Machine Learning não supervisionado (Isolation Forest e DBSCAN) para detectar comportamentos suspeitos em transações da blockchain Ethereum.\n\nRealizamos análise de outliers, definição de baseline com threshold manual, e avaliação de modelos supervisionados com métricas de classificação.\n\nResultados: Isolation Forest apresentou recall de 97% para fraudes e acurácia de 97%; o baseline (threshold) foi 100% preciso com recall de 81%; o DBSCAN detectou muitas anomalias mas com alto índice de falsos positivos (recall de apenas 5%).\n\nO projeto é aplicável em contextos de compliance, auditoria, cibersegurança e prevenção à lavagem de dinheiro, mostrando a relevância da modelagem para o setor financeiro descentralizado.",
    technologies: [
      "Python",
      "EDA",
      "Machine Learning",
      "Isolation Forest",
      "DBSCAN",
      "Visualização de Dados",
      "Blockchain",
      "Compliance"
    ],
    images: [
      {
        src: "/images/anomalias-corr.png",
        caption: "🔍 Heatmap de correlação entre variáveis relevantes das transações"
      },
      {
        src: "/images/anomalias-sent-dist.png",
        caption: "📊 Distribuição da variável 'Sent tnx' revela comportamento assimétrico e outliers"
      },
      {
        src: "/images/anomalias-erc20-boxplot.png",
        caption: "📦 Boxplot evidencia valores extremos em transações com tokens ERC20"
      },
      {
        src: "/images/anomalias-threshold.png",
        caption: "🚩 Aplicação de threshold manual como baseline para flag de anomalias"
      },
      {
        src: "/images/anomalias-matriz-baseline.png",
        caption: "📈 Matriz de confusão para avaliação do método baseline"
      },
      {
        src: "/images/anomalias-isolation-scatter.png",
        caption: "🌲 Detecção de anomalias com Isolation Forest: pontos vermelhos indicam suspeitas"
      },
      {
        src: "/images/anomalias-matriz-isolation.png",
        caption: "📊 Avaliação do Isolation Forest com alta acurácia e recall para fraudes"
      },
      {
        src: "/images/anomalias-dbscan-scatter.png",
        caption: "🧬 DBSCAN aplicando clusterização para detectar transações fora do padrão"
      },
      {
        src: "/images/anomalias-matriz-dbscan.png",
        caption: "⚠️ DBSCAN apresenta recall baixo e alta taxa de falsos positivos"
      }
    ]
  }
  
];
