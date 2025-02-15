const logger = require('../utils/logger');

const HEADING_INDEXING_LEVEL_DEFAULT = 3;

/**
 * Represents a read only site config read from the site configuration file,
 * with default values for unspecified properties.
 */
export class SiteConfig {
  baseUrl: string;
  enableSearch: boolean;
  faviconPath?: string;
  headingIndexingLevel: number;

  theme: string | boolean;
  style: {
    bootstrapTheme?: string;
    codeTheme: string;
    /**
     * Default hide display of line numbers for code blocks
     */
    codeLineNumbers: boolean;
  };

  pages: string[];
  pagesExclude: string[];
  ignore: string[];

  externalScripts: string[];
  titlePrefix: string;
  titleSuffix: string;
  globalOverride: { [frontmatterKey: string]: string };

  timeZone: string;
  locale: string;

  plugins: string[];
  pluginsContext: {
    [pluginName: string]: { [key: string]: any }
  };

  deploy: {
    message?: string;
    repo?: string;
    branch?: string;
  };

  intrasiteLinkValidation: {
    enabled: boolean;
  };

  plantumlCheck: boolean;

  /**
   * @param siteConfigJson The raw json read from the site configuration file
   * @param cliBaseUrl As read from the --baseUrl option
   */
  constructor(siteConfigJson: any, cliBaseUrl?: string) {
    this.baseUrl = cliBaseUrl !== undefined
      ? cliBaseUrl
      : (siteConfigJson.baseUrl || '');
    this.enableSearch = siteConfigJson.enableSearch === undefined || siteConfigJson.enableSearch;
    this.faviconPath = siteConfigJson.faviconPath;
    this.headingIndexingLevel = siteConfigJson.headingIndexingLevel || HEADING_INDEXING_LEVEL_DEFAULT;

    this.style = siteConfigJson.style || {};
    this.style.codeTheme = this.style.codeTheme || 'dark';
    this.style.codeLineNumbers = this.style.codeLineNumbers !== undefined
      ? this.style.codeLineNumbers : false;
    // TODO remove this
    this.theme = this.style.bootstrapTheme || siteConfigJson.theme || false;
    if (siteConfigJson.theme) {
      logger.warn("The 'theme' site configuration key has been consolidated under the 'style.bootstrapTheme'"
        + ' key.\n The old key will be deprecated in v3.0.');
    }

    this.pages = siteConfigJson.pages || [];
    this.pagesExclude = siteConfigJson.pagesExclude || [];
    this.ignore = siteConfigJson.ignore || [];
    this.externalScripts = siteConfigJson.externalScripts || [];
    this.titlePrefix = siteConfigJson.titlePrefix || '';
    this.titleSuffix = siteConfigJson.titleSuffix || '';
    this.globalOverride = siteConfigJson.globalOverride || {};

    this.timeZone = siteConfigJson.timeZone || 'UTC';
    this.locale = siteConfigJson.locale || 'en-GB';

    this.plugins = siteConfigJson.plugins || [];
    this.pluginsContext = siteConfigJson.pluginsContext || {};
    this.deploy = siteConfigJson.deploy || {};
    this.intrasiteLinkValidation = siteConfigJson.intrasiteLinkValidation || {};
    this.intrasiteLinkValidation.enabled = this.intrasiteLinkValidation.enabled !== false;

    // TODO this should probably be in pluginsContext
    this.plantumlCheck = siteConfigJson.plantumlCheck !== undefined
      ? siteConfigJson.plantumlCheck : true; // check PlantUML's prerequisite by default
  }
}

module.exports = SiteConfig;
