<template>
  <div class="post-list">
    <!-- If there is one or more queries loading -->
    <template v-if="loading > 0">
      Loading
    </template>
    <!-- Actual view -->
    <template v-else>
      <ul>
        <!-- Post list items -->
        <li v-for="blog in blogs" :key="blog.id">
          {{ blog.title }}
        </li>
      </ul>

      <ul>
        <!-- Post list items -->
        <li v-for="career in careers" :key="career.id">
          {{ career.title }}
        </li>
      </ul>
    </template>
  </div>
</template>


<script>
import gql from 'graphql-tag';

const blogsQuery = gql`
  query allBlogs {
    blogs {
      id
      title
      content
    }
  }
`;

const careersQuery = gql`
  query allCareers {
    careers {
      id
      title
    }
  }
`;
export default {
  data: () => ({
  }),
  apollo: {
    blogs: {
      query: blogsQuery,
      loadingKey: 'loading',
    },
    careers: {
    query: careersQuery,
    loadingKey: 'loading',
    }
  },
};
</script>
