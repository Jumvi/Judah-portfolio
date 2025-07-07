# 🔐 Configuration des Secrets GitHub

## GitHub Token - Pas de configuration nécessaire !

Pour le déploiement GitHub Pages, **aucun secret manuel n'est requis**. La nouvelle configuration utilise les permissions intégrées de GitHub.

## 📍 Où configurer des secrets personnalisés (si nécessaire)

Si vous avez besoin d'ajouter des secrets personnalisés (API keys, tokens tiers, etc.) :

### 1. **Via l'interface GitHub :**
```
Repository → Settings → Secrets and variables → Actions
```

### 2. **Types de secrets :**
- **Repository secrets** : Uniquement pour ce repo
- **Environment secrets** : Pour des environnements spécifiques
- **Organization secrets** : Partagés entre plusieurs repos

### 3. **Ajout d'un secret :**
1. Cliquez sur "New repository secret"
2. Nom : `MON_SECRET` (en MAJUSCULES)
3. Valeur : votre token/clé
4. Sauvegardez

### 4. **Utilisation dans le workflow :**
```yaml
steps:
  - name: Use secret
    env:
      API_KEY: ${{ secrets.MON_SECRET }}
    run: echo "Using API key..."
```

## 🛠 Configuration GitHub Pages

### Étapes requises dans votre repository :

1. **Aller dans Settings → Pages**
2. **Source** : Sélectionner "GitHub Actions"
3. **C'est tout !** Le workflow gère le reste automatiquement

### Permissions automatiques activées :
- ✅ `pages: write` - Pour déployer sur GitHub Pages
- ✅ `id-token: write` - Pour l'authentification
- ✅ `contents: read` - Pour lire le code (automatique)

## 🔄 Ancienne vs Nouvelle méthode

### ❌ Ancienne méthode (dépréciée) :
```yaml
- uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

### ✅ Nouvelle méthode (recommandée) :
```yaml
permissions:
  pages: write
  id-token: write

environment:
  name: github-pages

steps:
  - uses: actions/upload-pages-artifact@v3
    with:
      path: ./dist
  - uses: actions/deploy-pages@v4
```

## 🚨 Troubleshooting

### Erreur "Permission denied" :
1. Vérifiez que GitHub Pages est activé
2. Assurez-vous que la source est "GitHub Actions"
3. Vérifiez les permissions dans le workflow

### Erreur "Token not found" :
- Pour GitHub Pages : utilisez la nouvelle méthode ci-dessus
- Pour autres services : ajoutez le secret via Settings → Secrets

### Build échoue :
1. Vérifiez que `pnpm` est installé dans le workflow
2. Assurez-vous que `dist/` est le bon répertoire de build
3. Testez localement avec `pnpm run build`

## 📝 Exemples de secrets courants

### Variables d'environnement de build :
```yaml
env:
  VITE_API_URL: ${{ secrets.API_URL }}
  VITE_APP_KEY: ${{ secrets.APP_KEY }}
```

### Tokens pour services tiers :
```yaml
env:
  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
  NETLIFY_TOKEN: ${{ secrets.NETLIFY_TOKEN }}
```

## ✨ Avantages de la nouvelle méthode

- 🔒 **Plus sécurisé** : Permissions granulaires
- 🚀 **Plus rapide** : Pas de token à gérer
- 🛠 **Plus simple** : Configuration automatique
- 📊 **Meilleur logging** : Suivi détaillé des déploiements
