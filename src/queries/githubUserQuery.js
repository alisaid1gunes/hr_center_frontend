import { gql } from "@apollo/client";

const GITHUB_USER_QUERY = gql`
    query GetUserData($login: String!,$fromDate: DateTime!,$toDate: DateTime!){
        user(login: $login) {
            name
            login
            contributionsCollection(from: $fromDate, to: $toDate) {
              totalCommitContributions
              totalIssueContributions
              totalPullRequestContributions
              totalPullRequestReviewContributions
            }
            repositoriesContributedTo {
                totalCount
            }
            repositories{
                totalCount
            }
            starredRepositories {
                totalCount
            }
        }
    }
`

export { GITHUB_USER_QUERY }