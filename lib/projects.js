import { readdir, readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getFeaturedProject() {
    const projects = await getProjects();
    return projects[0];
}

export async function getProject(slug) {
    const text = await readFile(`./content/projects/${slug}.md`, 'utf8')
     const { content, data: { title, date, images, visualisations, category} } = matter(text);
     const body = marked(content, { headerIds: false, mangle: false });
     return { slug, title, date, images, body, visualisations, category };
 }

 export async function getProjects() {
    const files = await readdir('./content/projects');
    const slugs = files.filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
    const projects = [];
    for (const slug of slugs) {
        const project = await getProject(slug);
        projects.push(project)
    }
    projects.sort((a, b) => b.date.localeCompare(a.date));
    return projects;
 }

 export async function getSlugs() {
    const files = await readdir('./content/projects');
    return files.filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
 }