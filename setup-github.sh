#!/bin/bash

echo "🚀 Configurando repositório GitHub para BIPETech..."

# Aguarda um pouco para evitar problemas de lock
sleep 2

# Remove locks se existirem
rm -f .git/config.lock .git/index.lock 2>/dev/null

# Aguarda mais um pouco
sleep 1

# Tenta configurar o remote origin
echo "📡 Configurando remote origin..."
git remote add origin https://github.com/reisrodrigo1-dev/BipeTech.git 2>/dev/null || git remote set-url origin https://github.com/reisrodrigo1-dev/BipeTech.git

# Verifica se o remote foi configurado
echo "🔍 Verificando remotes configurados:"
git remote -v

# Adiciona todos os arquivos
echo "📁 Adicionando arquivos ao Git..."
git add .

# Faz o commit
echo "💾 Fazendo commit..."
git commit -m "🎉 Initial commit - BIPETech institutional website

✨ Features:
- Modern responsive design inspired by HeroSpark
- Educational technology focus with AI integration
- Three main solutions: DireitoHub, Marketplace, BIPE Plataforma
- React + TypeScript + Tailwind CSS stack
- Express.js backend with PostgreSQL
- Mission, vision, and values sections
- Professional CTA and footer

🏗️ Built with:
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Vite build tool
- Express.js + Drizzle ORM
- Modern responsive design patterns"

# Tenta fazer o push
echo "🚀 Enviando para GitHub..."
git push -u origin main

echo "✅ Script concluído! Verifique se o push foi bem-sucedido."
echo "💡 Se houver erro de autenticação, você precisará configurar suas credenciais do GitHub."