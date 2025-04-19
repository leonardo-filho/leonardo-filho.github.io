export const projects = [
    {
        id: 1,
        title: "Dashboard Comercial com Power BI",
        description:
          "Dashboard completo de análise de vendas com foco em insights visuais e decisão estratégica.",
        technologies: ["Power BI", "DAX", "Storytelling", "Modelagem de Dados", "Geovisualização"],
        images: [
          {
            src: "/images/dashboard-pbi-indice.png",
            caption: "🔍 Índice navegável e organizado por temas de análise"
          },
          {
            src: "/images/dashboard-pbi-narrativa.png",
            caption: "📖 Narrativa inteligente destaca fabricantes com maior e menor volume de vendas"
          },
          {
            src: "/images/dashboard-pbi-influenciadores.png",
            caption: "🎯 Gráfico de influência revela padrões que impactam negativamente o valor de venda"
          },
          {
            src: "/images/dashboard-pbi-categoria-loja.png",
            caption: "🛒 Gráfico Sankey mostra a relação entre categoria e ponto de venda"
          },
          {
            src: "/images/dashboard-pbi-mapa.png",
            caption: "🗺️ Mapa geográfico interativo com performance de vendedores por estado"
          }
        ]
      },
      {
        id: 2,
        title: "Análise de Anomalias em Transações Ethereum",
        description:
"Este projeto aplica técnicas de análise de dados e Machine Learning não supervisionado, como Isolation Forest e DBSCAN, para detectar comportamentos suspeitos em transações da blockchain Ethereum. Ele abrange desde a análise estatística inicial até a avaliação comparativa dos modelos de detecção de anomalias com métricas supervisionadas.",
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
            caption: "📊 Heatmap de correlação entre variáveis de transações"
          },
          {
            src: "/images/anomalias-sent-dist.png",
            caption: "📈 Distribuição da variável 'Sent tnx' com alta assimetria"
          },
          {
            src: "/images/anomalias-erc20-boxplot.png",
            caption: "📦 Boxplot revela outliers extremos no valor médio de tokens enviados"
          },
          {
            src: "/images/anomalias-threshold.png",
            caption: "🔍 Threshold definido sobre 'Sent tnx' para baseline simples"
          },
          {
            src: "/images/anomalias-matriz-baseline.png",
            caption: "🧪 Matriz de confusão do modelo Baseline com bom desempenho de precisão"
          },
          {
            src: "/images/anomalias-isolation-scatter.png",
            caption: "🌲 Resultados do Isolation Forest destacando padrões anômalos"
          },
          {
            src: "/images/anomalias-matriz-isolation.png",
            caption: "✅ Matriz de confusão do Isolation Forest com excelente recall"
          },
          {
            src: "/images/anomalias-dbscan-scatter.png",
            caption: "🟠 DBSCAN com muitos falsos positivos na detecção de anomalias"
          },
          {
            src: "/images/anomalias-matriz-dbscan.png",
            caption: "📉 Matriz de confusão do DBSCAN evidenciando sobreajuste"
          }
        ]
      }      
  ];