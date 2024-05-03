import { defineCollection, z } from 'astro:content';

const pulse = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		id: z.string().optional(),
		draft: z.boolean().optional(),
		name: z.string().optional(),
		category: z.string().optional(),
		sub_category: z.string().optional(),    
		key_words: z.array(z.string()).optional(),    
		buttontext: z.string().optional(),
		heroimage: z.string().optional(),
		heading: z.string().optional(),
		sub_heading: z.string().optional(),
		description: z.string().optional(),
		highlight1_heading: z.string().optional(),
		highlight1_description: z.string().optional(),
		highlight2_heading: z.string().optional(),
		highlight2_description: z.string().optional(),
		highlight3_heading: z.string().optional(),
		highlight3_description: z.string().optional(),
		faqs: z.array(z.object(
			{
				id: z.string().optional(),
				question_title: z.string().optional(),
				sub_title: z.string().optional(),
				question_shortanswer: z.string().optional(),
				question_answer: z.string().optional(),
				image: z.string().optional(),
			}		
		)).optional(),
		publish_timestamp: z.string().optional(),
		content_raw: z.string().optional()		
	}),
});
const industries = defineCollection({
	type: 'content',
	schema: z.object({
	  id: z.string().optional(),
	  draft: z.boolean().optional(),
	  title: z.string().optional(),
	  category: z.string().optional(),
	  sub_category: z.string().optional(),
	  key_words: z.array(z.string()).optional(),
	  image: z.string().optional(),    
	  heroimage: z.string().optional(),
	  heading: z.string().optional(),
	  sub_heading:z.string().optional(),
	  value_prop:z.string().optional(),
	  featured_article1_heading:z.string().optional(),
	  featured_article1_description:z.string().optional(),
	  featured_article1_slug:z.string().optional(),
	  featured_article1_image:z.string().optional(),
	  expertise_heading:z.string().optional(),
	  expertise_subheading:z.string().optional(),
	  expertise_heroimage:z.string().optional(),
	  expertise_detail:z.array(z.object({
		id: z.string().optional(),
		name: z.string().optional(),
		description: z.string().optional(),
		slug: z.string().optional(),
		subcategories: z.array(z.string()).optional()
	  })).optional(),
	  featured_article2_heading: z.string().optional(),
	  featured_article2_description: z.string().optional(),
	  featured_article2_image: z.string().optional(),
	  featured_article2_slug: z.string().optional(),
	  case_studies_heading: z.string().optional(),
	  case_studies_subheading: z.string().optional(),
	  case_studies_description: z.string().optional(),
	  case_studies_category: z.string().optional(),
	  case_studies_items:z.array(z.object({
		case_study_title: z.string().optional(),
		case_study_subheading: z.string().optional(),
		case_study_image: z.string().optional(),
		case_study_buttontext: z.string().optional(),
		case_study_slug: z.string().optional()
	  })).optional(),
	  videosection_videotitle: z.string().optional(),
	  videosection_videourl: z.string().optional(),
	  videosection_heroimage: z.string().optional(),
	  related_articles_heading: z.string().optional(),
	  related_articles_subheading: z.string().optional(),
	  related_articles_description: z.string().optional(),
	  related_articles_category: z.string().optional(),
	  related_articles_items:z.array(z.object({
		related_article_title: z.string().optional(),
		related_article_subheading: z.string().optional(),
		related_article_image: z.string().optional(),
		related_article_buttontext: z.string().optional(),
		related_article_slug: z.string().optional()
	  })).optional(),
	  
	}),
});
const expertise = defineCollection({
	schema: z.object({    
		id: z.string().optional(),
		draft: z.boolean().optional(),
		category: z.string().optional(),
		sub_category: z.string().optional(),
		name: z.string().optional(),
		description: z.string().optional(),
		featured_benefit_title: z.string().optional(),
		featured_benefit_description: z.string().optional(),
		key_words: z.array(z.string()).optional(),
		heroimage: z.string().optional(),
		heading: z.string().optional(),
		sub_heading: z.string().optional(),
		value_prop: z.string().optional(),
		faqs: z.array(z.object(
			{
				id: z.string().optional(),
				question_title: z.string().optional(),
				sub_title: z.string().optional(),
				question_shortanswer: z.string().optional(),
				question_answer: z.string().optional(),
				image: z.string().optional(),
			}		
		)).optional(),
		solutions_heading: z.string().optional(),
		solutions_subheading: z.string().optional(),
		solutions_description: z.string().optional(),
		solutions_heroimage: z.string().optional(),
		solutions_slug: z.string().optional(),
		capabilities_heading: z.string().optional(),
		capabilities_items:z.array(z.object({
			id: z.string().optional(),
			title: z.string().optional(),
			heading: z.string().optional(),
			content: z.string().optional()
		})).optional(),
		videosection_videotitle: z.string().optional(),
		videosection_videourl: z.string().optional(),
		videosection_heroimage: z.string().optional(),
		related_articles_heading: z.string().optional(),
		related_articles_subheading: z.string().optional(),
		related_articles_description: z.string().optional(),
		related_articles_category: z.string().optional(),
		related_articles_items:z.array(z.object({
			related_article_title: z.string().optional(),
			related_article_subheading: z.string().optional(),
			related_article_image: z.string().optional(),
			related_article_buttontext: z.string().optional(),
			related_article_description: z.string().optional(),
			related_article_slug: z.string().optional()
		  })).optional(),
	})
});
const services = defineCollection({
	schema: z.object({
		id: z.string().optional(),
		draft: z.boolean().optional(),
		title: z.string().optional(),
		category: z.string().optional(),
		sub_category: z.string().optional(),
		key_words: z.array(z.string()).optional(),
		image: z.string().optional(),    
		heroimage: z.string().optional(),
		heading: z.string().optional(),
		sub_heading:z.string().optional(),
		value_prop:z.string().optional(),
		featured_article1_heading:z.string().optional(),
		featured_article1_description:z.string().optional(),
		featured_article1_slug:z.string().optional(),
		featured_article1_image:z.string().optional(),
		expertise_heading:z.string().optional(),
		expertise_subheading:z.string().optional(),
		expertise_heroimage:z.string().optional(),
		expertise_detail:z.array(z.object({
		id: z.string().optional(),
		name: z.string().optional(),
		description: z.string().optional(),
		slug: z.string().optional(),
		subcategories: z.array(z.string()).optional()
		})).optional(),
		featured_article2_heading: z.string().optional(),
		featured_article2_description: z.string().optional(),
		featured_article2_image: z.string().optional(),
		featured_article2_slug: z.string().optional(),
		case_studies_heading: z.string().optional(),
		case_studies_subheading: z.string().optional(),
		case_studies_description: z.string().optional(),
		case_studies_category: z.string().optional(),
		case_studies_items:z.array(z.object({
		case_study_title: z.string().optional(),
		case_study_subheading: z.string().optional(),
		case_study_image: z.string().optional(),
		case_study_buttontext: z.string().optional(),
		case_study_slug: z.string().optional()
		})).optional(),
		videosection_videotitle: z.string().optional(),
		videosection_videourl: z.string().optional(),
		videosection_heroimage: z.string().optional(),
		related_articles_heading: z.string().optional(),
		related_articles_subheading: z.string().optional(),
		related_articles_description: z.string().optional(),
		related_articles_category: z.string().optional(),
		related_articles_items:z.array(z.object({
		related_article_title: z.string().optional(),
		related_article_subheading: z.string().optional(),
		related_article_image: z.string().optional(),
		related_article_buttontext: z.string().optional(),
		related_article_slug: z.string().optional()
		})).optional(),
		
	}),
});
const glossaries = defineCollection({
	schema: z.object({
		id: z.string().optional(),
		draft: z.boolean().optional(),
		name: z.string().optional(),
		category: z.string().optional(),
		description: z.string().optional(),    
		key_words: z.array(z.string()).optional(),    
		content_raw: z.string().optional(),
		related_articles_heading: z.string().optional(),
		related_articles_subheading: z.string().optional(),
		related_articles_description: z.string().optional(),
		related_articles_category: z.string().optional(),
		related_articles_items:z.array(z.object({
			related_article_title: z.string().optional(),
			related_article_subheading: z.string().optional(),
			related_article_image: z.string().optional(),
			related_article_buttontext: z.string().optional(),
			related_article_slug: z.string().optional()
		})).optional(),
		
	}),
});
const solutions = defineCollection({
	schema: z.object({
		id: z.string().optional(),
		category: z.string().optional(),
		sub_category: z.string().optional(),
		name: z.string().optional(),
		description: z.string().optional(),
		key_words: z.array(
			z.string()
		).optional(),
		faqs: z.array(z.object(
			{
				id: z.string().optional(),
				question_title: z.string().optional(),
				sub_title: z.string().optional(),
				question_shortanswer: z.string().optional(),
				question_answer: z.string().optional(),
				image: z.string().optional(),
			}		
		)).optional(),
		tags: z.string().optional(),
		image: z.string().optional(),
		heroimage: z.string().optional(),
		heading: z.string().optional(),
		sub_heading: z.string().optional(),
		content_raw: z.string().optional(),
		related_articles_heading: z.string().optional(),
		related_articles_subheading: z.string().optional(),
		related_articles_description: z.string().optional(),
		related_articles_category: z.string().optional(),
		related_articles_items:z.array(z.object({
			related_article_title: z.string().optional(),
			related_article_subheading: z.string().optional(),
			related_article_image: z.string().optional(),
			related_article_buttontext: z.string().optional(),
			related_article_description: z.string().optional(),
			related_article_slug: z.string().optional()
		  })).optional(),
	}),
});
const pages = defineCollection({
	schema: z.object({
		id: z.string().optional(),
		title: z.string(),
		category_name: z.string().optional(),
		category_url: z.string().optional(),
		key_words: z.array(z.string()).optional(),
		heroimage: z.string().optional(),
		heading: z.string().optional(),
		sub_heading: z.string().optional(),
		value_prop: z.string().optional(),
		image: z.string().optional(),
		layout: z.string().optional(),
		draft: z.boolean().optional(),
		case_studies_heading: z.string().optional(),
		case_studies_subheading: z.string().optional(),
		case_studies_description: z.string().optional(),
		case_studies_category: z.string().optional(),
		case_studies_items:z.array(z.object({
		case_study_title: z.string().optional(),
		case_study_subheading: z.string().optional(),
		case_study_image: z.string().optional(),
		case_study_buttontext: z.string().optional(),
		case_study_slug: z.string().optional()
		})).optional(),
		videosection_videotitle: z.string().optional(),
		videosection_videourl: z.string().optional(),
		videosection_heroimage: z.string().optional(),
		related_articles_heading: z.string().optional(),
		related_articles_subheading: z.string().optional(),
		related_articles_description: z.string().optional(),
		related_articles_category: z.string().optional(),
		related_articles_items:z.array(z.object({
		related_article_title: z.string().optional(),
		related_article_subheading: z.string().optional(),
		related_article_image: z.string().optional(),
		related_article_buttontext: z.string().optional(),
		related_article_slug: z.string().optional()
		})).optional(),
	}),
});
const casestudies = defineCollection({
	schema: z.object({    
		id: z.string().optional(),
		category: z.string().optional(),
		sub_category: z.string().optional(),
		name: z.string().optional(),
		description: z.string().optional(),
		key_words: z.array(z.string()).optional(),    
		image: z.string().optional(),
		heading: z.string().optional(),
		highlight1_heading: z.string().optional(),
		highlight1_description: z.string().optional(),
		highlight2_heading: z.string().optional(),
		highlight2_description: z.string().optional(),
		highlight3_heading: z.string().optional(),
		highlight3_description: z.string().optional(),    
		faqs: z.array(z.object(
			{
				id: z.string().optional(),
				question_title: z.string().optional(),
				sub_title: z.string().optional(),
				question_shortanswer: z.string().optional(),
				question_answer: z.string().optional(),
				image: z.string().optional(),
			}		
		)).optional(),
		publish_timestamp: z.string().optional(),
		content_raw: z.string().optional()
	}),
});
const insights = defineCollection({
	schema: z.object({
		id: z.string().optional(),
		draft: z.boolean().optional(),
		name: z.string().optional(),
		category: z.string().optional(),
		sub_category: z.string().optional(),    
		key_words: z.array(z.string()).optional(),    
		buttontext: z.string().optional(),
		heroimage: z.string().optional(),
		heading: z.string().optional(),
		sub_heading: z.string().optional(),
		description: z.string().optional(),
		highlight1_heading: z.string().optional(),
		highlight1_description: z.string().optional(),
		highlight2_heading: z.string().optional(),
		highlight2_description: z.string().optional(),
		highlight3_heading: z.string().optional(),
		highlight3_description: z.string().optional(),
		faqs: z.array(z.object(
			{
				id: z.string().optional(),
				question_title: z.string().optional(),
				sub_title: z.string().optional(),
				question_shortanswer: z.string().optional(),
				question_answer: z.string().optional(),
				image: z.string().optional(),
			}		
		)).optional(),
		publish_timestamp: z.string().optional(),
		content_raw: z.string().optional()		
	}),
});
const podcasts = defineCollection({
	schema: z.object({
		id: z.string().optional(),
		draft: z.boolean().optional(),
		name: z.string().optional(),
		category: z.string().optional(),
		sub_category: z.string().optional(),    
		key_words: z.array(z.string()).optional(),    
		buttontext: z.string().optional(),
		heroimage: z.string().optional(),
		heading: z.string().optional(),
		sub_heading: z.string().optional(),
		description: z.string().optional(),
		highlight1_heading: z.string().optional(),
		highlight1_description: z.string().optional(),
		highlight2_heading: z.string().optional(),
		highlight2_description: z.string().optional(),
		highlight3_heading: z.string().optional(),
		highlight3_description: z.string().optional(),
		faqs: z.array(z.object(
			{
				id: z.string().optional(),
				question_title: z.string().optional(),
				sub_title: z.string().optional(),
				question_shortanswer: z.string().optional(),
				question_answer: z.string().optional(),
				image: z.string().optional(),
			}		
		)).optional(),
		publish_timestamp: z.string().optional(),
		content_raw: z.string().optional()		
	}),
});
 export const collections = { 
	pulse,
	industries,
	expertise,
	solutions,
	services,
	glossaries,
	pages,
	casestudies,
	insights,
	podcasts
 };


